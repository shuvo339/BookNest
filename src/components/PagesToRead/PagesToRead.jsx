import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
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
  
  let pages = readbooks?.map(book=>book.totalPages);
  let name = readbooks?.map(book=>book.bookName);
 
console.log(name)
  const data = [
    {
      name: `${name[0]? name[0]: ''}`,
      uv: `${pages[0]? pages[0]:''}`,
    },
    {
      name: `${name[1]? name[1]: ''}`,
      uv: `${pages[1]? pages[1]:''}`,
    },
    {
      name: `${name[2]? name[2]: ''}`,
      uv: `${pages[2]? pages[2]:''}`,
    },
    {
      name: `${name[3]? name[3]: ''}`,
      uv: `${pages[3]? pages[3]:''}`,
    },
    {
      name: `${name[4]? name[4]: ''}`,
      uv: `${pages[4]? pages[4]:''}`,
    },
    {
      name: `${name[5]? name[5]: ''}`,
      uv: `${pages[5]? pages[5]:''}`,
    },
  ];

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
      <BarChart
        width={1100}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
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
    </div>
  );
};

export default PagesToRead;
