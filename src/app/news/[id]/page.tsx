const NewsDetail = async ({ params }: { params: { id: string } }) => {
  const res = await params;

  return <div>NewsDetail: {res.id}</div>;
};

export default NewsDetail;
