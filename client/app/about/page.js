import Description from "@/components/Description";
import Main from "@/components/Main";
import PageContainer from "@/components/PageContainer";
import Title from "@/components/Title";

export default async function About() {
  return (
    <PageContainer>
      <Main>
        <Title>About page</Title>
        <Description>Some description for this page</Description>
      </Main>
    </PageContainer>
  );
}
