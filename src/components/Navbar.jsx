import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex items-center gap-2 mt-4">
        <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer" onClick={() => navigate('/')}>
          ALL
        </p>
        <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer" onClick={() => navigate('/playlists')}>Playlists</p>
        <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer" onClick={() => navigate('/music')}>Music</p>

      </div>
    </>
  );
};

export default Navbar;
