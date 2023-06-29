import PageContainer from "@/components/PageContainer";
import Description from "@/components/Description";
import Title from "@/components/Title";
import Main from "@/components/Main";
import List from '@/components/List';

export default async function Home() {
  const data = await getPosts();

  return (
    <PageContainer>
      <Main>
        <Title>Checkin from others (for me)</Title>
        <Description>a recipe for disaster</Description>
        <List allPosts={data} />
      </Main>
    </PageContainer>
  );
}

  async function getPosts() {
    try {
      const response = await fetch(`${process.env.API_URL}/api/posts`);
      const data = await response.json();
      return data
    } catch (error) {
      console.error('Error:', error);
    }
  }
