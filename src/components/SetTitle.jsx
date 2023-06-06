import { Helmet } from "react-helmet-async";

const SetTitle = ({ title }) => {
  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
    </div>
  );
};

export default SetTitle;
