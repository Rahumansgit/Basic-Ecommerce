

const FeatureSection = ({IMGsrc, title, discription, btnCTA, className}) => {
  return (
    <section className={`mt-25 px-8 flex gap-8 xl:gap-0 justify-center items-center lg:justify-between flex-wrap ${className}`}>
        <div className="bg-wild-sand p-8 rounded-md">
            <img src={IMGsrc} alt={title + " Image"} className="w-md h-100 object-contain" />
        </div>

        <div className="flex flex-col gap-4 justify-center w-120">
            <h2 className="text-4xl font-bold">{title}</h2>
            <p className="text-base">{discription}</p>
            <button className="button">{btnCTA}</button>
        </div>
    </section>
  )
}

export default FeatureSection