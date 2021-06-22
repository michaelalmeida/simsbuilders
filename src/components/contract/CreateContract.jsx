/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Input, message, Slider } from 'antd';
import { useForm } from 'react-hook-form';
import randomstring from 'randomstring';

import { Wrapper } from '../style/Container';

import { H1 } from '../style/Typography';
import {
    Form,
    FormItem,
    FormItemDiv,
    Copybutton,
    Content,
    UsingNotebookIllustration,
} from './CreateContract.style';

const CreateContract = () => {
    const { TextArea } = Input;
    const hashtagValue = `tsbuilders${randomstring.generate(4)}`;

    const { register, handleSubmit } = useForm();
    const intl = useIntl();

    const onSubmit = (data) => alert(JSON.stringify(data));

    const copyText = (
        <Copybutton
            type="button"
            onClick={() => {
                navigator.clipboard.writeText(hashtagValue);
                message.success(intl.formatMessage({ id: 'copied' }));
            }}>
            <FormattedMessage id="copy" />
        </Copybutton>
    );

    return (
        <>
            <Content>
                <Wrapper>
                    <H1>
                        <FormattedMessage id="contract.create" />
                    </H1>
                    <UsingNotebookIllustration alt="Person using computer" />
                </Wrapper>
            </Content>
            <Wrapper>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <FormItem>
                        <div>
                            <h4>
                                <FormattedMessage id="contract.name" />
                            </h4>
                            <Input
                                {...register('name')}
                                placeholder={intl.formatMessage({ id: 'contract.name' })}
                            />
                        </div>
                        <div>
                            <h4>
                                <FormattedMessage id="contract.size" />
                            </h4>
                            <Input
                                {...register('size')}
                                placeholder={intl.formatMessage({ id: 'contract.size' })}
                            />
                        </div>
                        <div>
                            <h4>
                                <FormattedMessage id="contract.hashtag" />
                            </h4>
                            <Input
                                {...register('hashtag')}
                                placeholder={intl.formatMessage({ id: 'contract.hashtag' })}
                                defaultValue={hashtagValue}
                                addonAfter={copyText}
                                size="large"
                                disabled
                            />
                        </div>
                    </FormItem>
                    <FormItem>
                        <Input
                            {...register('budget')}
                            placeholder={intl.formatMessage({ id: 'contract.budget' })}
                        />
                        <Input
                            {...register('payment')}
                            placeholder={intl.formatMessage({ id: 'contract.payment' })}
                        />
                        <Input
                            {...register('type')}
                            placeholder={intl.formatMessage({ id: 'contract.type' })}
                        />
                    </FormItem>
                    <FormItemDiv>
                        <Slider
                            {...register('payment')}
                            defaultValue={2000}
                            min={1000}
                            max={8000}
                            tooltipVisible
                        />
                    </FormItemDiv>
                    <TextArea
                        {...register('summary')}
                        placeholder={intl.formatMessage({ id: 'contract.summary' })}
                    />
                    <input type="submit" />
                </Form>
            </Wrapper>
        </>
    );
};

export { CreateContract };
