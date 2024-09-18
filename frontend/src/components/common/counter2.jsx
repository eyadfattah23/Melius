import "../../assets/styles/common/counter.css"
/**
 * Counter2 component displays a counter for achieved days with an optional unit label.
 */
const Counter2 = ({achieved_days, unit}) =>{
    return <div className="quit_days">
        <p className="number">{achieved_days}</p>
       {
        unit && <p>{unit}</p>
       }
    </div>
}
export default Counter2