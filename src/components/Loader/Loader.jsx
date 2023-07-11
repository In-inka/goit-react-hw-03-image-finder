import { ThreeDots } from 'react-loader-spinner';
import { WrapperLoader } from './Loader.styled';

const Loader = () => {
  return (
    <WrapperLoader>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#4fa94d"
        ariaLabel="three-dots-loading"
        visible={false}
      />
    </WrapperLoader>
  );
};

export default Loader;
