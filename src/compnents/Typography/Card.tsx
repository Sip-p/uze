type CardProps = {
    title: string;
    content: string;
  };
  
  export const Card = ({ title, content }: CardProps) => (
    <div className="p-4 border rounded shadow-md">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700">{content}</p>
    </div>
  );
  