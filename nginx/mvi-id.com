# Deteksi bahasa otomatis untuk kunjungan pertama ke "/" (root), berdasarkan
# header CF-IPCountry yang disuntikkan Cloudflare (proxy situs ini). Bukan
# API geo-IP eksternal — gratis, instan, tidak menyentuh privasi pengunjung
# di luar apa yang Cloudflare sudah proses sebagai proxy.
#
# Preferensi eksplisit (cookie mvi_lang, diset LocaleContext.tsx saat
# pengunjung pertama kali mendarat ATAU saat klik ganti bahasa manual) SELALU
# menang atas tebakan negara ini pada kunjungan berikutnya.
map $http_cf_ipcountry $mvi_is_id_country {
    default 0;
    ID      1;
}

server {
    server_name mvi-id.com www.mvi-id.com;

    root /var/www/_demo-project/demo-mvi/frontend/dist;
    index index.html;

    # Hanya root "/" yang dicek — deep link (mis. /sektor/tekstil atau /en/...)
    # selalu dianggap pilihan sadar pengunjung dan tidak pernah dialihkan.
    location = / {
        if ($cookie_mvi_lang = en) {
            return 302 /en/;
        }
        if ($cookie_mvi_lang = id) {
            break;
        }
        # Belum ada preferensi tersimpan: tebak dari negara.
        if ($mvi_is_id_country = 0) {
            return 302 /en/;
        }
        try_files /index.html =404;
    }

    location = /index.html {
        add_header Cache-Control "no-cache";
    }

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|svg|webp|ico|woff2?)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    location ~ /\. { deny all; }

    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml image/svg+xml;
    gzip_min_length 256;

    listen [::]:443 ssl ipv6only=on; # managed by Certbot
    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/mvi-id.com/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/mvi-id.com/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot


}
server {
    if ($host = www.mvi-id.com) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


    if ($host = mvi-id.com) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


    listen 80;
    listen [::]:80;
    server_name mvi-id.com www.mvi-id.com;
    return 404; # managed by Certbot




}
