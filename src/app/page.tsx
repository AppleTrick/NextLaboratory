import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>내가 만든것들 구현 & 어떻게 코드 짰는지 표현 하는것</div>
      <div>
        각각의 docs안에 되어 있음 만약에 navbar 검색했을때 navbar 1, navbar 2,
        navbar 3, 이 나오고 일치하는 항목만 나오게할것!
      </div>
      <div>
        {" "}
        각각의 app page component는 일단 구현 컴포넌트가 별도로 존재함 왜냐하면
        이건 내가 코드 알아보기 위한거니까 그니까 폴더안에 page.tsx / 설명.md
        파일 / 그걸 구현을 위한 compnent 폴더 안에 필요한 것들이 있어야함 왜냐면
        이건 효율적인 페이지를 만들기 위한게 아닌 내가 뭘 구현했고, 그걸
        앞으로도 편하게 이용하기 위해서 만든 페이지니까 일단 분류가 필요하네
      </div>
    </>
  );
}
