import React from "react";

const Card = ({ image, tags, title, children, ...props }) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg" {...props}>
    {image && <img alt={title} className="w-full h-64" src={image} />}
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base">{children}</p>
    </div>
    {tags && Boolean(tags.length) && (
      <div className="px-6 py-4">
        {tags.map(tag => (
          <span
            key={tag}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >
            #{tag}
          </span>
        ))}
      </div>
    )}
  </div>
);

export default Card;
