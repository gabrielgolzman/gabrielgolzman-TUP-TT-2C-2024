import { useContext } from "react";

import { TranslationContext } from "../../services/translationContext/TranslationContext";
import { dictionary_translations } from "./translation.dictionary";

const useTranslation = () => {
    const { language } = useContext(TranslationContext);

    return (key) => {
        const translation = dictionary_translations[language] ?
            dictionary_translations[language].find((t) => t.key === key)?.value :
            dictionary_translations["en"].find(t => t.key === key)?.value;

        return translation || key;
    };

};

export default useTranslation;

