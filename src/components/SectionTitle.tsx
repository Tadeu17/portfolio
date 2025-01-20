interface TTitleProps {
  title: string
}

const Landing = ({ title }: TTitleProps) => {
  return (
    <h1 className="text-gray-50 text-3xl font-semibold mb-4 text-center md:text-left">{title}</h1>
  )
}

export default Landing