import SecondaryBtn from "../Button/SecondaryBtn";

const InstructorCard = ({ instructor }) => {
  return (
    <div className="card shadow-2xl">
      <figure className="px-10">
        <img
          src={instructor.photoURL}
          alt={instructor.displayName}
          className="h-[200px] rounded-full"
        />
      </figure>
      <div className="card-body items-center">
        <h2 className="card-title">{instructor.displayName}</h2>
        <p className="text-lg">{instructor.email}</p>
        <div className="flex gap-5">
          <p>Total Class: {instructor.totalClass || 0}</p>
          <p>Total Student: {instructor.totalStudent || 0}</p>
        </div>
        <div className="card-actions w-full">
          <SecondaryBtn>See Classes</SecondaryBtn>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
