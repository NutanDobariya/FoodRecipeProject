import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {GetUserList} from '../api/home';
import {categories} from '../constants/index';
import * as dashboardActions from '../store/location/actions';

const PAGE_SIZE = 5;

const useRequests = () => {
  const requests = useSelector(state => state.location.userData);
  const selectedCategory = useSelector(state => state.location.category);

  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [error, setError] = useState('');

  const canLoadMore = requests && requests.length < count;

  const dispatch = useDispatch();

  const fetchData = async page => {
    const result = await GetUserList(page, PAGE_SIZE);
    setCount(result.data.total);
    setCurrentPage(result.data.page);

    if (result.data.page == 1) {
      dispatch(dashboardActions.userData(result.data.data));
    } else {
      let listData = result.data.data;
      dispatch(dashboardActions.userData([...requests, ...listData]));
    }
    setRefreshing(false);
  };

  const mangeCategoryPress = async category => {
    dispatch(dashboardActions.category(category));
  };

  const onRefresh = () => {
    setRefreshing(true);
    setCurrentPage(1);
    fetchData(1);
  };

  const fetchNextPage = () => {
    if (!loading && canLoadMore) {
      setRefreshing(true);
      fetchData(currentPage + 1);
    }
  };

  const onFilterChange = text => {
    if (text) {
      const newData = requests.filter(function (item) {
        const itemData = item.first_name
          ? item.first_name.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newData);
      setSearchText(text);
    } else {
      setFilteredData(requests);
      setSearchText(text);
    }
  };

  useEffect(() => {
    dispatch(dashboardActions.category(categories[0].label));
    onRefresh();
  }, []);

  return {
    categories,
    loading,
    refreshing,
    error,
    requests,
    canLoadMore,
    onRefresh,
    fetchNextPage,
    mangeCategoryPress,
    onFilterChange,
    filteredData,
    searchText,
    selectedCategory,
  };
};

export default useRequests;
