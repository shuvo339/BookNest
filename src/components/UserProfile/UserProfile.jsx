import { useNavigate } from 'react-router-dom';
import user from '../../assets/user.jpg'

const UserProfile = () => {
    const navigate = useNavigate();
    const handleReadlist=()=>{
        navigate('/listedbook/wishlist')
    }
  return (
    <div className="flex flex-col items-center justify-center space-y-3 mt-10">
      <div className="avatar">
        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src={user} />
        </div>
      </div>
        <h2 className="text-3xl">Shafiullah Shuvo</h2>
        <p>shuvo3399@gmail.com</p>

        <div className="flex  gap-8 pt-3">
        <button onClick={handleReadlist} className="text-[#23BE0A] font-semibold underline">Read</button>
       <button onClick={handleReadlist} className="text-[#23BE0A] font-semibold underline">Wishlist</button>
      </div>
        <button className='btn bg-[#23BE0A] text-white'>Edit Profile</button>
        <div className='bg-slate-100 rounded-xl'><h2 className='py-2 px-4 font-semibold'>Joined at March, 2024</h2></div>
    </div>
  );
};

export default UserProfile;
