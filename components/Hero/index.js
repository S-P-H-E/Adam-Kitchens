import AI from "./AI";
import Nav from "../Nav";
import Link from "./Link";

export default function Hero({name, title}){
    return(
      <>
        <div className="flex flex-col h-screen">
          <Nav name={name} />
          <div className="flex flex-col justify-center items-center mb-20 h-full bg-gradient-to-t from-[var(--highlight)] via-white to-white from-10% via-70% to-90%">
            <p className="text-base md:text-lg border-[var(--text)] m-4 px-4 py-1 rounded-full">Hi I&apos;m {name}</p>
            <h1 className="text-5xl sm:text-7xl text-center font-bold md:w-[800px]">{title}</h1>
            <AI />
            <div className="flex flex-col gap-5">
              <Link name={"Free Consultation"} link={"https://calendly.com/kitchensfitness/freeconsultation?month=2023-08"}/>
              <Link name={"Bands & Bodyweight Training"} link={"https://kitchensfitness1.gumroad.com/l/mumbp"}/>
              <Link name={"Weekly Newsletter"} link={"https://mailchi.mp/6160590472d6/weekly-email-sign-up"}/>
            </div>
          </div>
        </div>
      </>
    )
  }