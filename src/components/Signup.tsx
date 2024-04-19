import { useSignup } from '@/lib/react-query/queriesAndMutations';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { mutateAsync: signup, error } = useSignup();

  if (error) {
    console.log(error);
    return <div>Please try again after sometime</div>;
  }

  const handleSubmit = async () => {
    event?.preventDefault();
    const data = await signup({ username, password, confirmPassword, email });
    localStorage.setItem('token', data?.data.token);
    navigate('/');
  };
  return (
    <div className="flex">
      <div className="w-1/2 flex items-center justify-center text-[12px]">
        <form
          action="submit"
          className="border-[1px] border-orange-100 p-8 rounded-md"
        >
          <div className="flex flex-col gap-2 justify-center">
            <h3 className="text-orange-100 text-base font-bold text-center">
              CREATE ACCOUNT
            </h3>
            <input
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Username"
              className="p-1 border-[1px] rounded-sm"
            />
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Email"
              className="p-1 border-[1px] rounded-sm"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className="p-1 border-[1px] rounded-sm"
            />
            <input
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              placeholder="Confirm Password"
              className="p-1 border-[1px] rounded-sm"
            />
            <button
              className="bg-orange-100 text-white rounded-xl py-1"
              onClick={handleSubmit}
            >
              Register
            </button>
            <p>
              Already have an account?{' '}
              <Link className="text-orange-400" to="/signin">
                Signin
              </Link>
            </p>
          </div>
        </form>
      </div>
      <div className="w-1/2">
        <img
          src="/assets/imgs/bed.png"
          alt="bed"
          className="w-screen h-screen"
        />
      </div>
    </div>
  );
};

export default Signup;
