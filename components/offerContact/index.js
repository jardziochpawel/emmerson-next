
import {
    ButtonSubmit,
    Container,
    Form,
    IconAgent,
    Mail, MailInput,
    Name,
    NameInput,
    Number, NumberInput,
    TextInput
} from "./styles/offerContact";

export default function OfferContact({children, ...restProps}){

    return(<Container {...restProps}>{children}</Container>)
}

OfferContact.IconAgent = function OfferContactIconAgent({ ...restProps }){

    return(<IconAgent {...restProps} />)
}

OfferContact.Name = function OfferContactName({children, ...restProps}){

    return(<Name {...restProps}>{children}</Name>)
}

OfferContact.Number = function OfferContactNumber({children, ...restProps}){

    return(<Number {...restProps}>{children}</Number>)
}

OfferContact.Mail = function OfferContactMail({children, ...restProps}){

    return(<Mail {...restProps}>{children}</Mail>)
}

OfferContact.Form = function OfferContactForm({children, ...restProps}){

    return(<Form {...restProps}>{children}</Form>)
}

OfferContact.TextInput = function OfferContactTextInput({ ...restProps }){

    return(<TextInput {...restProps} />)
}

OfferContact.NameInput = function OfferContactNameInput({ ...restProps }){

    return(<NameInput {...restProps} />)
}

OfferContact.NumberInput = function OfferContactNumberInput({ ...restProps }){

    return(<NumberInput {...restProps} />)
}

OfferContact.MailInput = function OfferContactMailInput({ ...restProps }){

    return(<MailInput {...restProps} />)
}

OfferContact.ButtonSubmit = function OfferContactButtonSubmit({children, ...restProps}){

    return(<ButtonSubmit {...restProps}>{children}</ButtonSubmit>)
}