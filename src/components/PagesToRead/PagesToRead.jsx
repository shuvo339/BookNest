import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import { getReadBooksFromLS } from "../../Utils/ReadBooksLS";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];




const PagesToRead = () => {

  const [readbooks, setReadBooks] = useState([]);
  const books = useLoaderData();
  useEffect(()=>{
      const storedReadBookIds = getReadBooksFromLS();
      if(storedReadBookIds){
          const storedReadBooks = books?.filter(book=>storedReadBookIds.includes(book.bookId));
          setReadBooks(storedReadBooks)
      }
  }, [])
  
  const data = readbooks?.map(book=>{
    return {
      name: book.bookName,
      uv: book.totalPages,
    }
  });

    // name: {name},


  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${
      y + height
    } ${x + width}, ${y + height}
        Z`;
  };

  const TriangleBar = (props) => {
    // eslint-disable-next-line react/prop-types
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <div className="flex justify-center my-10">
      <ResponsiveContainer width="95%" height={400}>
      <BarChart layoyt="vertical"
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis className="text-xs font-semibold" angle={19} dataKey="name" />
        <YAxis />
        <Bar
          dataKey="uv"
          fill="#8884d8"
          shape={<TriangleBar />}
          label={{ position: "top" }}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
</ResponsiveContainer>
      </div>
  );
};

export default PagesToRead;
