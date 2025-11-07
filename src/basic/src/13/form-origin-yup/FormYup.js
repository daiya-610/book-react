import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup
    .string()
    .label("名前")
    .required("${label}は必須です。")
    .max(20, "${label}は${max}文字以内で入力してください。"),
  gender: yup.string().label("性別").required("${label}は必須です。"),
  email: yup
    .string()
    .label("メールアドレス")
    .required("${label}は必須です。")
    .email("${label}の形式が不正です。"),
  memo: yup
    .string()
    .label("備考")
    .required("${label}は必須です。")
    .min(10, "${label}は${min}文字以上で入力してください。")
    .test(
      "ng",
      ({ label }) => `${label}にNGワードが含まれています。`,
      (value) => {
        // 不適切ワードを準備
        const ngs = ["暴力", "禁止", "グロ"];
        // 入力文字列に不適切ワードが含まれているかを判定
        for (const ng of ngs) {
          if (value.includes(ng)) {
            return false;
          }
        }
        return true;
      }
    ),
});

export default function FormYup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "山田太郎",
      email: "admin@example.com",
      gender: "male",
      memo: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        console.log(data);
      }, 1000);
    });
  };

  const onerror = (err) => console.log(err);

  return (
    <form onSubmit={handleSubmit(onSubmit, onerror)} noValidate>
      <div>
        <label htmlFor="name">名前：</label>
        <br />
        <input id="name" type="text" {...register("name")} />
      </div>
      <div>{errors.name?.message}</div>
      <div>
        <label htmlFor="gender">性別：</label>
        <br />
        <label>
          <input type="radio" value="male" {...register("gender")} />
          男性
        </label>
        <label>
          <input type="radio" value="female" {...register("gender")} />
          女性
        </label>
      </div>
      <div>{errors.gender?.message}</div>
      <div>
        <label htmlFor="email">メールアドレス：</label>
        <br />
        <input id="email" type="email" {...register("email")} />
      </div>
      <div>{errors.email?.message}</div>
      <div>
        <label htmlFor="memo">備考：</label>
        <textarea id="memo" {...register("memo")} />
        <div>{errors.memo?.message}</div>
      </div>
      <div>
        <button type="submit">送信</button>
      </div>
    </form>
  );
}
