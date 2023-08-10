import React from "react";
import {
  InnerContainer,
  Inners,
  SignTitle,
  InputContainer,
  SignButton,
  SignInput,
  SignP,
} from "../../emotion/component";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    console.log(data);
    // 서버로 데이터 전송 또는 다른 로직 처리
  };

  return (
    <>
      <Inners>
        <InnerContainer width={"50rem"}>
          <SignTitle>회원가입</SignTitle>
          <InputContainer>
            <div>
              <SignInput
                id="email"
                placeholder="사용할 아이디를 입력하세요"
                {...register("email", {
                  required: "이메일을 입력하세요",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "유효한 이메일 주소를 입력하세요",
                  },
                })}
              />
              {errors.email && <SignP>{errors.email.message}</SignP>}
            </div>

            <div>
              <SignInput
                id="password"
                placeholder="사용할 비밀번호를 입력하세요"
                {...register("password", {
                  required: "비밀번호를 입력하세요",
                  minLength: {
                    value: 8,
                    message: "비밀번호는 최소 8자 이상이어야 합니다",
                  },
                })}
              />
              {errors.password && <SignP>{errors.password.message}</SignP>}
            </div>
            <div>
              <SignInput
                id="name"
                placeholder="이름을 입력하세요"
                {...register("name", {
                  required: "이름을 입력하세요",
                })}
              />
              {errors.name && <SignP>{errors.name.message}</SignP>}
            </div>
            <div>
              <SignInput
                id="phoneNumber"
                placeholder="휴대폰 번호를 입력하세요"
                {...register("phoneNumber", {
                  required: "휴대폰 번호를 입력하세요",
                  pattern: {
                    value: /^[0-9]{3}-[0-9]{4}-[0-9]{4}$/i,
                    message:
                      "유효한 휴대폰 번호를 입력하세요 (000-0000-0000 형식)",
                  },
                })}
              />
              {errors.phoneNumber && (
                <SignP>{errors.phoneNumber.message}</SignP>
              )}
            </div>
            <Link to="/signin">
              <SignButton>가입 하기</SignButton>
            </Link>
          </InputContainer>
        </InnerContainer>
      </Inners>
    </>
  );
};

export default Signup;
