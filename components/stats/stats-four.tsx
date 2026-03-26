import Image from "next/image"
export function StatsFour() {
  return (
    <section className="bg-[#002603] py-24 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute left-0 top-0">
        <Image
          src="/placeholder.svg"
          alt=""
          width={200}
          height={200}
          className="opacity-10"
          role="presentation"
        />
      </div>
      <div className="absolute right-0 bottom-0">
        <Image
          src="/placeholder.svg"
          alt=""
          width={200}
          height={200}
          className="opacity-10"
          role="presentation"
        />
      </div>

      <div className="container relative">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg bg-white/5 p-8 text-center backdrop-blur-sm">
            <div className="text-4xl font-bold text-[#00B207] mb-2">37+</div>
            <div className="text-white">Years of Hard Work</div>
          </div>
          
          <div className="rounded-lg bg-white/5 p-8 text-center backdrop-blur-sm">
            <div className="text-4xl font-bold text-[#00B207] mb-2">500k+</div>
            <div className="text-white">Happy Customer</div>
          </div>
          
          <div className="rounded-lg bg-white/5 p-8 text-center backdrop-blur-sm">
            <div className="text-4xl font-bold text-[#00B207] mb-2">28</div>
            <div className="text-white">Qualified Team Member</div>
          </div>
          
          <div className="rounded-lg bg-white/5 p-8 text-center backdrop-blur-sm">
            <div className="text-4xl font-bold text-[#00B207] mb-2">750k+</div>
            <div className="text-white">Monthly Orders</div>
          </div>
        </div>
      </div>
    </section>
  )
}

