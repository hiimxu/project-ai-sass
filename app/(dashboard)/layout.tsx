import React from 'react';

type Props = {
    children: React.ReactNode;
};

const DashboardLayout: React.FC<Props> = ({ children }) => {
    return <div>{children}</div>;
};

export default DashboardLayout;
