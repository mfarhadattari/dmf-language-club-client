import SecondaryBtn from "../Button/SecondaryBtn";

const InstructorCard = ({ instructor }) => {
  return (
    <div className="card shadow-2xl">
      <figure className="px-10 py-10">
        <img
          src={instructor.photoURL}
          alt={instructor.displayName}
          className="h-[200px] rounded-full"
        />
      </figure>
      <div className="card-body items-center">
        <h2 className="card-title">{instructor.displayName}</h2>

        <p className="text-lg">
          {instructor.email}
        </p>
        <p className="text-lg">
          {instructor?.totalClass
            ? `Total Class:${instructor.totalClass} `
            : ""}
        </p>
        <div className="card-actions">
          <SecondaryBtn>See Classes</SecondaryBtn>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
