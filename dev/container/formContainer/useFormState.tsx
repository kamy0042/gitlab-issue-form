import { useState } from "react";
import { RadioInputProps } from "~/components/RadioInput";
import { TextInputProps } from "~/components/TextInput";
import { CheckInputProps, isCheckInputProps } from "~/components/CheckInput";

type FormState = (
    | (RadioInputProps & { value: string })
    | (TextInputProps & { value: string })
    | (CheckInputProps & { value: string })
)[];

export const useFormState = () => {
    const [formState, setFormState] = useState<FormState>([
        {
            name: "title",
            label: "Issueタイトル",
            desc: "例：〇〇の修正、〇〇を行えるようにしてほしい 等",
            multiline: false,
            value: "",
        },
        {
            name: "target",
            label: "Issueの対象",
            check: [
                { checkLabel: "hoge", checked: false },
                { checkLabel: "huga", checked: false },
            ],
            value: "",
        },
        {
            name: "importance",
            label: "重要度",
            desc: "例：〇〇の修正、〇〇を行えるようにしてほしい 等",
            radio: [
                { btnLabel: "Must：必ず実装する必要がある（必須）", value: "Must" },
                { btnLabel: "Should：できれば実装すべき（推奨）", value: "Should" },
                {
                    btnLabel: "Could：提供のためにコストや時間がかかりすぎなければ実装する",
                    value: "Could",
                },
                { btnLabel: "Won't：将来的に実装が必要かもしれないもの", value: "Won't" },
            ],
            value: "",
        },
        {
            name: "ugency",
            label: "緊急性",
            desc:
                "部署内で緊急性を検討し、１つ選択してください。\n重要度が同じ依頼が複数個存在した場合、「期日指定の依頼」と「緊急性の高い依頼」が優先となります",
            radio: [
                { btnLabel: "High", value: "High" },
                { btnLabel: "Middle", value: "Middle" },
                { btnLabel: "Low", value: "Low" },
                { btnLabel: "指定期日あり", value: "指定期日あり" },
            ],
            value: "",
        },
        {
            name: "date",
            label: "指定期日",
            desc: "※上で「指定期日あり」を選択された方はこちらを入力してください",
            multiline: false,
            value: "",
        },
        {
            name: "problem",
            label: "依頼に関して、どのような問題が発生しているのか教えてください",
            desc: "例：〇〇の作業に時間がかかる、〇〇の使い勝手が悪い 等",
            multiline: true,
            value: "",
        },
        {
            name: "future",
            label: "問題の解決によって、何を実現したいのか教えてください",
            desc: "例：〇〇の作業工数の削減、〇〇によるミスを減らす CVR向上 等",
            multiline: true,
            value: "",
        },
        {
            name: "how",
            label: "その問題をどのように解決してほしいのか教えてください",
            desc: "例：〇〇を表示させる、〇〇が出力されるようになる 等",
            multiline: true,
            value: "",
        },
        {
            name: "area",
            label: "想定する作業範囲",
            desc: "例：hoge 〇〇機能、hoge＋huga 等",
            multiline: true,
            value: "",
        },
    ]);

    const createValue = (item: FormState[number], e: React.ChangeEvent<HTMLInputElement>) => {
        if (isCheckInputProps(item)) {
            const newCheckState = item.check.map((checkbox) =>
                checkbox.checkLabel === e.target.value ? { ...checkbox, checked: !checkbox.checked } : checkbox
            );

            const newValues = newCheckState
                .filter((CheckState) => CheckState.checked)
                .map((filtered) => filtered.checkLabel)
                .join();

            return { ...item, check: newCheckState, value: newValues };
        }

        return { ...item, value: e.target.value };
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormState((prevState) =>
            prevState.map((item) => (item.name === e.target.name ? createValue(item, e) : item))
        );
    };

    return { formState, handleChange };
};
