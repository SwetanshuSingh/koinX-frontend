import MemberCard from "./ui/MemberCard";

const Team = () => {
    return (
        <section className="w-[881px] h-[776px] rounded-lg bg-white text-[#0F1629] flex flex-col gap-6 p-6">
            <h2 className="text-2xl font-semibold">Team</h2>
            
            <p className="max-w-[830px] h-[52px] text-[16px] leading-[25.6px] text-[#3E424A]">Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.</p>

            <MemberCard name="John Smith" picture="/assets/person-1.png" />

            <MemberCard name="Elina Williams" picture="/assets/person-2.png" />

            <MemberCard name="John Smith" picture="/assets/person-3.png" />
        </section>
    )
}

export default Team;