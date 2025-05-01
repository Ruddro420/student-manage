/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import Modal from "../../components/Modal/Modal";
import axios from "axios";

const Module = ({ data }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalData, setModalData] = useState();

    const BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const [modules, setModules] = useState([]);
    const [loading, setLoading] = useState(true);


    // console.log(data);

    const loadData = () => {
        axios.get(`${BASE_URL}/module/data/${data.id}`)
            .then((res) => {
                setModules(res.data.modules);
                setLoading(false);
            });
    }
    useMemo(() => {
        loadData()
    }, [data]);
    // Loader state

    // Modal function
    const modalHandler = (id) => {
        setIsOpen(true);
        setModalData(id);
    };

    return (
        <div className="grid gap-10 mb-8 md:grid-cols-3">
          
        </div>
    );
};

export default Module;
