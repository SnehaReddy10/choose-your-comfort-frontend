import { Link, useNavigate } from 'react-router-dom';
import Signup from './Signup';
import { useSignin } from '@/lib/react-query/queriesAndMutations';
import { useState } from 'react';

const Signin = () => {
  const navigate = useNavigate();
  const { mutateAsync: signin, isPending: isSigninIn, error } = useSignin();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    event?.preventDefault();
    const data = await signin({ username, password });
    if (error) {
      //TODO: show popup/toast with try again message
      navigate('/signin');
    }
    localStorage.setItem('token', data?.data?.token);
    navigate('/');
  };

  if (isSigninIn) {
    return <div>Signing in... Please wait</div>;
  }

  return (
    <div className="flex">
      <div className="w-1/2">
        <img
          src="/assets/imgs/bed.png"
          alt="bed"
          className="w-screen h-screen"
        />
      </div>
      <div className="w-1/2 flex items-center justify-center text-[12px]">
        <form
          onSubmit={handleSubmit}
          className="border-[1px] border-orange-100 p-8 rounded-md"
        >
          <div className="flex flex-col gap-2 justify-center">
            <h3 className="text-orange-100 text-base font-bold text-center">
              LOGIN
            </h3>
            <p className="text-gray-200">
              Welcome back! Enter your account details
            </p>
            <input
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Username"
              className="p-1 border-[1px] rounded-sm"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className="p-1 border-[1px] rounded-sm"
            />
            <button
              className="bg-orange-100 text-white rounded-xl py-1"
              type="submit"
            >
              Login
            </button>
            <p>
              Don't have an account?{' '}
              <Link
                className="text-orange-400"
                to="/signup"
                element={<Signup />}
              >
                Create account
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
