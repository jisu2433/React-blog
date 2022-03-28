import React from "react";
import styled from "styled-components";

export const ProductModificationForm = styled.div`
    width: 100%;
    margin-bottom: 16px;
`;
export const ProductModificationLabel = styled.label`
    display: block;
    color: #767676;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    margin-bottom: 10px;
`;
export const ProductModificationInput = styled.input`
    width: 100%;
    font-size: 14px;
    line-height: 14px;
    padding-bottom: 8px;
    border: none;
    border-bottom: 1px solid #dbdbdb;
`;

const StyledComponent = () => {
    return(
    <ProductModificationForm>
        <ProductModificationLabel>
            <ProductModificationInput>입력</ProductModificationInput>
        </ProductModificationLabel>
    </ProductModificationForm>
    );
};

export default StyledComponent;