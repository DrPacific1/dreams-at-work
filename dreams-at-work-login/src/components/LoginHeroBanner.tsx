export default function LoginHeroBanner() {
  return (
    <>
      <div className="relative h-44 w-full overflow-hidden rounded-t-[16px]">
        <img
          src="/login-banner.jpeg"
          alt=""
          className="h-full w-full object-cover object-center"
        />
        {/* Dark overlay so logo reads clearly over any photo */}
        <div className="absolute inset-0 bg-black/40" />
        {/* White Dreams@Work logo centered on the image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='260' height='48' viewBox='0 0 260 48'%3E%3Ctext y='36' font-family='Inter%2Csystem-ui%2Csans-serif' font-size='32' font-weight='900'%3E%3Ctspan fill='%23FFFFFF'%3EDreams%3C/tspan%3E%3Ctspan fill='%23CCFF00'%3E%40%3C/tspan%3E%3Ctspan fill='%23FFFFFF'%3EWork%3C/tspan%3E%3C/text%3E%3C/svg%3E"
            alt="Dreams@Work"
            className="h-12 w-auto drop-shadow-lg"
          />
        </div>
      </div>
      {/* Separator between banner and card content */}
      <div className="h-px w-full bg-gray-100" />
    </>
  )
}
