/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Input, message, Slider, Select, Tag } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { useForm } from 'react-hook-form';
import randomstring from 'randomstring';

import { Wrapper } from '../style/Container';
import { setScoreMiddleware } from '../../store/user';

import { H1, H3 } from '../style/Typography';
import {
    Form,
    FormItem,
    FormItemDiv,
    Copybutton,
    Content,
    UsingNotebookIllustration,
    FormWrapper,
    Sidebar,
} from './CreateContract.style';

import colorOptions from './colorOptions';

const { Option } = Select;

const CreateContract = () => {
    const userID = useSelector(({ user }) => user.userInfo.id);
    const dispatch = useDispatch();
    const { TextArea } = Input;
    const hashtagValue = `tsbuilders${randomstring.generate(4)}`;

    useEffect(() => {
        dispatch(setScoreMiddleware(userID));
    }, [0]);

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

    const tagRender = (props) => {
        // eslint-disable-next-line react/prop-types
        const { label, value, closable, onClose } = props;
        const onPreventMouseDown = (event) => {
            event.preventDefault();
            event.stopPropagation();
        };
        return (
            <Tag
                color={value}
                onMouseDown={onPreventMouseDown}
                closable={closable}
                onClose={onClose}
                style={{ marginRight: 3 }}>
                {label}
            </Tag>
        );
    };
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
            <FormWrapper>
                <Wrapper>
                    <Sidebar>
                        <H3>
                            <FormattedMessage id="contract.tutorial" />
                        </H3>
                        <ol>
                            <li>
                                <FormattedMessage id="contract.tutorial.step.one" />
                            </li>
                            <li>
                                <FormattedMessage id="contract.tutorial.step.two" />
                            </li>
                            <li>
                                <FormattedMessage
                                    id="contract.tutorial.step.three"
                                    values={{ hashtag: hashtagValue }}
                                />
                            </li>
                        </ol>
                    </Sidebar>
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
                            <div>
                                <h4>
                                    <FormattedMessage id="contract.budget" />
                                </h4>
                                <Input
                                    {...register('budget')}
                                    defaultValue={8000}
                                    placeholder={intl.formatMessage({ id: 'contract.budget' })}
                                />
                            </div>
                            <div>
                                <h4>
                                    <FormattedMessage id="contract.style" />
                                </h4>
                                <Select
                                    defaultValue={intl.formatMessage({
                                        id: 'contract.style.option.modern',
                                    })}
                                    style={{ width: '100%' }}>
                                    <Option
                                        value={intl.formatMessage({
                                            id: 'contract.style.option.modern',
                                        })}>
                                        {intl.formatMessage({ id: 'contract.style.option.modern' })}
                                    </Option>
                                    <Option
                                        value={intl.formatMessage({
                                            id: 'contract.style.option.rustic',
                                        })}>
                                        {intl.formatMessage({ id: 'contract.style.option.rustic' })}
                                    </Option>
                                    <Option
                                        value={intl.formatMessage({
                                            id: 'contract.style.option.industrial',
                                        })}>
                                        {intl.formatMessage({
                                            id: 'contract.style.option.industrial',
                                        })}
                                    </Option>
                                    <Option
                                        value={intl.formatMessage({
                                            id: 'contract.style.option.classic',
                                        })}>
                                        {intl.formatMessage({
                                            id: 'contract.style.option.classic',
                                        })}
                                    </Option>
                                    <Option
                                        value={intl.formatMessage({
                                            id: 'contract.style.option.beach',
                                        })}>
                                        {intl.formatMessage({ id: 'contract.style.option.beach' })}
                                    </Option>
                                    <Option
                                        value={intl.formatMessage({
                                            id: 'contract.style.option.montain',
                                        })}>
                                        {intl.formatMessage({
                                            id: 'contract.style.option.montain',
                                        })}
                                    </Option>
                                    <Option
                                        value={intl.formatMessage({
                                            id: 'contract.style.option.country',
                                        })}>
                                        {intl.formatMessage({
                                            id: 'contract.style.option.country',
                                        })}
                                    </Option>
                                    <Option
                                        value={intl.formatMessage({
                                            id: 'contract.style.option.victorian',
                                        })}>
                                        {intl.formatMessage({
                                            id: 'contract.style.option.victorian',
                                        })}
                                    </Option>
                                    <Option
                                        value={intl.formatMessage({
                                            id: 'contract.style.option.tiny',
                                        })}>
                                        {intl.formatMessage({ id: 'contract.style.option.tiny' })}
                                    </Option>
                                </Select>
                            </div>
                            <div>
                                <h4>
                                    <FormattedMessage id="contract.colors" />
                                </h4>
                                <Select
                                    mode="multiple"
                                    showArrow
                                    tagRender={tagRender}
                                    style={{ width: '100%' }}
                                    options={colorOptions(intl)}
                                    maxTagCount={4}
                                />
                            </div>
                        </FormItem>
                        <FormItemDiv>
                            <h4>
                                <FormattedMessage id="contract.payment" />
                            </h4>
                            <Slider
                                {...register('payment')}
                                defaultValue={2000}
                                min={1000}
                                max={8000}
                                tooltipVisible
                            />
                        </FormItemDiv>
                        <FormItem>
                            <TextArea
                                {...register('summary')}
                                placeholder={intl.formatMessage({ id: 'contract.summary' })}
                            />
                        </FormItem>
                        <input type="submit" />
                    </Form>
                </Wrapper>
            </FormWrapper>
        </>
    );
};

export { CreateContract };
