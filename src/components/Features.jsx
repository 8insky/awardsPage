import BentoCard from "./BentoCard"

const Features = () => {
  return (
  <section className="bg-black pb-52 ">
    <div className="container mx-auto px-3 md:p-10">
        <div className="px-5 py-32">
            <p className="font-circular-web text-lg text-blue-50">Into the Metagame Layer </p>
        </div>
        <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Recusandae reprehenderit hic laboriosam animi aut? 
            Libero ex placeat, animi, aperiam in sint ut ad perferendis,
             quaerat error iste dolorem hic maiores.</p>

             <div className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
                <BentoCard
                src="videos/feature-1.mp4"
                title={<>
                radi<b>n</b>t
                </>}
                description=' Recusandae reprehenderit hic laboriosam animi aut? 
            Libero ex placeat, animi, aperiam  '
            isComingSoon
                />
             </div>
    </div>

  </section>
  )
}

export default Features