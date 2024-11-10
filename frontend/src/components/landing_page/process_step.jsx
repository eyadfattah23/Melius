export default function ProcessStep({step_num,label, description}) {
    return <div className="process_step flex flex-col gap-4 items-center">
        <div className="w-[100px] h-[100px] step_icon flex flex-col justify-center">
            {step_num}
        </div>
        <h3 className="text-center">
        {label}
        </h3>
        <p className="paragraph text-center">
        {description}
        </p>
    </div>
}