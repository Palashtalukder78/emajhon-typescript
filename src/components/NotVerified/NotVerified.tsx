const NotVerified = ({ children }) => {

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="flex flex-col items-center gap-10">
        {children ? (
          <h1 className="text-5xl">Check email and Verify it!</h1>
        ) : (
          <h1 className="text-5xl">Your email still not verified!! Please Verify</h1>
        )}
      </div>
    </div>
  );
};

export default NotVerified;
