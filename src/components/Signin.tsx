import { Link, useNavigate } from 'react-router-dom';
import { useSignin } from '@/lib/react-query/queriesAndMutations';
import { useState } from 'react';
import { Constants } from '@/common/constants';
import Toast from './Toast';
import Loader from './Loader';

const Signin = () => {
  console.log('Sigin');
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorWhileSigningin, setErrorWhileSigningin] = useState('');
  let { mutateAsync: signin, isPending: isSigninIn } = useSignin();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const signinResponse = await signin({ username, password });
      if (signinResponse.data) {
        localStorage.setItem(Constants.TOKEN, signinResponse?.data?.token);
        navigate('/');
      }
    } catch (err: any) {
      console.log(err);
      setErrorWhileSigningin(err?.response?.data?.error);
    }
  };
  if (isSigninIn) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="relative h-screen">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2">
          <img
            src="/assets/imgs/bed.png"
            alt="bed"
            className="w-screen h-1/4 md:h-screen -translate-y-6 md:-translate-y-0"
          />
        </div>
        <div className="md:w-1/2 flex items-center justify-center text-[12px]">
          <form className="border-[1px] border-orange-100 p-8 rounded-md">
            <div className="flex flex-col gap-2 justify-center">
              <h3 className="text-orange-100 text-base font-bold text-center">
                LOGIN
              </h3>
              <p className="text-gray-200">
                Welcome back! Enter your account details
              </p>
              <input
                onBlur={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="Username"
                className="p-1 border-[1px] rounded-sm"
              />
              <input
                onBlur={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                className="p-1 border-[1px] rounded-sm"
              />
              <button
                type="button"
                className="bg-orange-100 text-white rounded-xl py-1"
                onClick={handleSubmit}
              >
                Login
              </button>
              <p>
                Don't have an account?{' '}
                <Link className="text-orange-400" to="/signup">
                  Create account
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      {errorWhileSigningin && (
        <Toast
          message={errorWhileSigningin}
          className={'bottom-1 md:top-1 md:bottom-auto end-2 '}
        />
      )}
    </div>
  );
};

export default Signin;
