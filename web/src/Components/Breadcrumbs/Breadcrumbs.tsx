import React from 'react';
import './Breadcrumbs.scss';

interface BreadcrumbsProps {
  items: string[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => (
  <div className="breadcrumbs">
    <span>Home</span>
    {items.map((item) => (
      <React.Fragment key={item}>
        <Separator />
        <span>{item}</span>
      </React.Fragment>
    ))}
  </div>
);

const Separator = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
    <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
  </svg>
);

export default Breadcrumbs;
