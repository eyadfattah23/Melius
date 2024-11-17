import Flame from "../../assets/icons/flame"
import Leaders_List from "../leaders_list"
import { FourSquare } from "react-loading-indicators"
export default function Leaders_Board({isLeadersLoading, setMaxDays}) {
    return <section className="leaders-board flex flex-col lg:py-16 py-8 lg:px-20 px-6 gap-16" style={{background:"linear-gradient(180deg, #B7CAFB -20.38%, #FFF 52.36%)"
    }}>
    {isLeadersLoading ? (
        <FourSquare color="#32cd32" size="medium" text="Loading Leaders..." textColor="#000" />
    ) : (
        <>
        <header className="flex items-start justify-center lg:gap-2 ">
            <h1 className="text-center text-[#092466] ">Leaders Board</h1>
            <Flame/>
        </header>
        <Leaders_List setMaxDays={setMaxDays} />
      </>
    )}
    </section>
}
