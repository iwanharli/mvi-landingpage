// Sumber: assets/brand/logo-light.png (dari desainer), di-trim dari padding
// transparan menjadi logo-mvi.png. Varian reverse (putih penuh) mengikuti
// "Reverse on Navy" pada spec grafimetri v1.0 hal. 05.
// Ganti dengan MVI_Master_Logo_Primary.svg bila file master sudah tersedia.

type LogoProps = {
  variant?: 'primary' | 'reverse'
  className?: string
}

export default function Logo({ variant = 'primary', className = 'h-9' }: LogoProps) {
  const src = variant === 'reverse' ? '/img/logo-mvi-reverse.png' : '/img/logo-mvi.png'

  return (
    <img
      src={src}
      alt="PT Mitra Verifikasi Indonesia — Global Conformity Partner"
      width={900}
      height={228}
      className={`w-auto ${className}`}
    />
  )
}
