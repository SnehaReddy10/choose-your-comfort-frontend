import { useSignup } from '@/lib/react-query/queriesAndMutations';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Toast from './Toast';
import Loader from './Loader';
import { Constants } from '@/common/constants';

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorWhileSigningup, setErrorWhileSigningup] = useState('');
  const { mutateAsync: signup, isPending: isCreatingUser } = useSignup();

  console.log('signup');

  const handleSubmit = async () => {
    event?.preventDefault();
    try {
      const data = await signup({ username, password, confirmPassword, email });
      localStorage.setItem(Constants.TOKEN, data?.data.token);
      navigate('/');
    } catch (err: any) {
      console.log(err);
      setErrorWhileSigningup(err?.response?.data?.error);
      setTimeout(() => {
        setErrorWhileSigningup('');
      }, 4000);
    }
  };

  if (isCreatingUser) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  }
  return (
    <div className="relative h-screen">
      <div className="flex flex-col-reverse md:flex-row-reverse space-y-16">
        <div className="md:w-1/2">
          <img
            src="/assets/imgs/bed.png"
            alt="bed"
            className="w-screen h-1/4 md:h-screen translate-y-24 md:-translate-y-0"
          />
        </div>
        <div className="md:w-1/2 flex items-center justify-center text-[12px]">
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
      </div>
      {errorWhileSigningup && (
        <Toast
          message={errorWhileSigningup}
          className={'bottom-1 md:top-1 md:bottom-auto end-2 '}
        />
      )}
    </div>
  );
};

export default Signup;
