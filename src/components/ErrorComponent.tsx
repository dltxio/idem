const ErrorComponent = () => {
  return (
    <div className="relative justify-center items-center text-center text-2xl w-2/3">
      <div className="alert alert-error shadow-lg">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>ERROR:</span>
          <span>IDEM was unable to verify your email! Please try again.</span>
        </div>
      </div>
    </div>
  );
};
export default ErrorComponent;
