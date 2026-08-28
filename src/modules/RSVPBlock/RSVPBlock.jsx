import { useState } from 'react';
import './RSVPBlock.css';
import api from "../../services/API/api";

const initialForm = {
    name: '',
    wishes: '',
    attendance: null,
};

const RSVPBlock = () => {
    const [form, setForm] = useState(initialForm);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleAttendanceChange = (value) => {
        setForm((prev) => ({
            ...prev,
            attendance: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            name: form.name.trim(),
            wishes: form.wishes.trim(),
            attendance: form.attendance === 'true',
        };

        try {
            const response = await api.post(
                '/guests',
                data
            );

            console.log('Wedding RSVP успешно отправлен:', response.data);

            setForm(initialForm);

        } catch (error) {
            console.error('Ошибка при отправке RSVP:', error);
        }
    };

    return (
        <section className="rsvp-block">
            <div className="rsvp-block__content">

                <h2 className="rsvp-block__title">
                    Подтвердите
                    <br />
                    присутствие
                </h2>

                <div className="rsvp-block__divider">
                    <span />
                    <span className="rsvp-block__heart">♡</span>
                    <span />
                </div>

                <p className="rsvp-block__description">
                    Пожалуйста, заполните небольшую форму,
                    <br />
                    чтобы мы знали, ждать ли Вас
                    <br />
                    на нашем празднике.
                </p>

                <form
                    className="rsvp-block__form"
                    onSubmit={handleSubmit}
                >

                    <div className="rsvp-block__field">
                        <label htmlFor="name">
                            Ваше имя
                        </label>

                        <input
                            id="name"
                            name="name"
                            type="text"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Введите ваше имя"
                            required
                        />
                    </div>

                    <div className="rsvp-block__field">
                        <label htmlFor="wishes">
                            Пожелания
                        </label>

                        <textarea
                            id="wishes"
                            name="wishes"
                            value={form.wishes}
                            onChange={handleChange}
                            placeholder="Напишите несколько слов..."
                            rows={3}
                        />
                    </div>

                    <div className="rsvp-block__attendance">

                        <p className="rsvp-block__question">
                            Вы будете с нами?
                        </p>

                        <div className="rsvp-block__options">

                            <label className="rsvp-block__option">
                                <input
                                    type="radio"
                                    name="attendance"
                                    value="true"
                                    checked={form.attendance === 'true'}
                                    onChange={() =>
                                        handleAttendanceChange('true')
                                    }
                                    required
                                />

                                <span className="rsvp-block__radio" />

                                <span>
                                    Да, обязательно приду
                                </span>
                            </label>

                            <label className="rsvp-block__option">
                                <input
                                    type="radio"
                                    name="attendance"
                                    value="false"
                                    checked={form.attendance === 'false'}
                                    onChange={() =>
                                        handleAttendanceChange('false')
                                    }
                                />

                                <span className="rsvp-block__radio" />

                                <span>
                                    К сожалению, не смогу
                                </span>
                            </label>

                        </div>
                    </div>

                    <button
                        type="submit"
                        className="rsvp-block__submit"
                    >
                        ОТПРАВИТЬ
                    </button>

                </form>

            </div>
        </section>
    );
};

export default RSVPBlock;