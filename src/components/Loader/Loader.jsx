import { ThreeDots } from 'react-loader-spinner';
import { WrapperLoader } from './Loader.styled';

const Loader = () => {
  return (
    <WrapperLoader>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="blue"
        ariaLabel="three-dots-loading"
        visible={true}
      />
    </WrapperLoader>
  );
};

export default Loader;
