const ListBottomBlur = () => {
  return (
    <div
      id='list-bottom-blur'
      style={{
        position: 'fixed',
        bottom: 0,
        minWidth: '100%',
        height: '10vh',
        maskImage: 'linear-gradient(to bottom, #00000000, #000000)',
        backdropFilter: 'blur(4px)',
      }}
    />
  );
};

export default ListBottomBlur
