import { RiAddCircleLine } from 'react-icons/ri';

const Card = ({ question, answer }) => {
  return (
    <div className="border-l-2 border-cyan-700 p-2 mb-4 bg-slate-100">
      <h4 className="font-semibold flex items-center gap-1"><RiAddCircleLine />{question}</h4>
      <p>{answer}</p>
    </div>
  );
};

const Faq = () => {
  return (
    <section className="px-2 md:px-6">
      <div className="sm:container mx-auto lg:max-w-4xl py-6 text-slate-700">
        <h2 className="font-serif font-bold text-xl border-b-2 border-slate-100 pb-2">
          FAQ
        </h2>
        <div className="py-4">
          <Card
            question={"Do we have doubt support in this program?"}
            answer={
              "You may get additional feature of doubt support. While purchasing this course, click on 'Add to Cart' for Doubt Support and Assistance."
            }
          />
          <Card
            question={"How can I register for the course?"}
            answer={
              "You need to sign up for the course. After signing up, you need to pay when the payment link opens."
            }
          />
          <Card
            question={
              "What type of certificate will be offered in this program"
            }
            answer={
              "Once the course is completed. You'll be getting a course completion certificate."
            }
          />
          <Card
            question={"When can I make the payment for the course?"}
            answer={"The payment link will be available on the course page."}
          />
          <Card
            question={
              "Will the course content be available after the course end date?"
            }
            answer={"Course content comes with lifetime validity."}
          />
          <Card
            question={"What features does Doubt Support have?"}
            answer={
              "Doubt support helps you clear your doubt of any GFG and codeforces courses/problems. You can raise your doubt anytime. Our doubt support assistance is available 24x7."
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Faq;
