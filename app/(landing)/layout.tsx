import React from 'react';

type Props = {
    children: React.ReactNode;
};

const LandingLayout: React.FC<Props> = ({ children }) => {
    return <div>{children}</div>;
};

export default LandingLayout;
