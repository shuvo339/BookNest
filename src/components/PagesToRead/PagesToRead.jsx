import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const PagesToRead = () => {
  const data = [
    {
      name: "The Silent Patient",
      uv: 336,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Educated",
      uv: 352,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Where the Crawdads Sing",
      uv: 384,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Becoming",
      uv: 448,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "The Night Circus",
      uv: 400,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "The Power of Habit",
      uv: 400,
      pv: 3800,
      amt: 2500,
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
        width={1050}
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
