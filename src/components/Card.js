import React from "react";

const Card = ({ image, tags, title, children, action, ...props }) => (
  <div className="max-w-sm rounded overflow-hidden shadow hover:shadow-lg transition-fast translate-small" {...props}>
    {image && <img alt={title} className="w-full h-64" src={image} />}
    <div className="px-6 py-4">
      <div className="flex justify-between items-center mb-2">
        <div className="font-bold text-xl">{title}</div>
        <div>{action}</div>
      </div>
      <p className="text-gray-700 text-base">{children}</p>
    </div>
    {tags && Boolean(tags.length) && (
      <div className="px-6 py-4">
        {tags.map(tag => (
          <span
            key={tag}
            className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >
            #{tag}
          </span>
        ))}
      </div>
    )}
  </div>
);

export default Card;
