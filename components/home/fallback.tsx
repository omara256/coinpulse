import React from 'react';
import DataTable from '@/components/DataTable';

export const CoinOverviewFallback = () => {
  return (
    <div id="coin-overview-fallback">
      <div className="header pt-2">
        <div className="header-image bg-dark-400 animate-pulse" />
        <div className="info">
          <div className="header-line-sm bg-dark-400 animate-pulse" />
          <div className="header-line-lg bg-dark-400 animate-pulse" />
        </div>
      </div>

      <div className="flex gap-2 md:gap-3 mt-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="period-button-skeleton bg-dark-400 animate-pulse" />
        ))}
      </div>

      <div className="chart mt-4">
        <div className="chart-skeleton bg-dark-400 animate-pulse" />
      </div>
    </div>
  );
};

export const TrendingCoinsFallback = () => {
  const columns: DataTableColumn<any>[] = [
    {
      header: 'Name',
      cellClassName: 'name-cell',
      cell: () => (
        <div className="name-link pl-0!">
          <div className="name-image bg-dark-400 animate-pulse" />
          <div className="name-line bg-dark-400 animate-pulse" />
        </div>
      ),
    },
    {
      header: '24h Change',
      cellClassName: 'change-cell',
      cell: () => (
        <div className="price-change">
          <div className="change-icon bg-dark-400 animate-pulse" />
          <div className="change-line bg-dark-400 animate-pulse" />
        </div>
      ),
    },
    {
      header: 'Price',
      cellClassName: 'price-cell',
      cell: () => <div className="price-line bg-dark-400 animate-pulse" />,
    },
  ];

  const dummyData = Array(6).fill({});

  return (
    <div id="trending-coins-fallback">
      <h4>Trending Coins</h4>
      <div className="trending-coins-table">
        <DataTable
          data={dummyData}
          columns={columns}
          rowKey={(_, i) => i}
          tableClassName="trending-coins-table"
          headerRowClassName="bg-dark-500!"
        />
      </div>
    </div>
  );
};

export const CategoriesFallback = () => {
  const columns: DataTableColumn<any>[] = [
    {
      header: 'Category',
      cellClassName: 'category-cell',
      cell: () => <div className="value-skeleton-lg bg-dark-400 animate-pulse" />,
    },
    {
      header: 'Top Gainers',
      cellClassName: 'top-gainers-cell',
      cell: () => (
        <div className="flex gap-1">
          {[1, 2, 3].map((i) => (
            <div key={i} className="size-7 rounded-full bg-dark-400 animate-pulse" />
          ))}
        </div>
      ),
    },
    {
      header: '24h Change',
      cellClassName: 'change-header-cell',
      cell: () => (
        <div className="change-cell">
          <div className="change-icon bg-dark-400 animate-pulse" />
          <div className="change-line bg-dark-400 animate-pulse" />
        </div>
      ),
    },
    {
      header: 'Market Cap',
      cellClassName: 'market-cap-cell',
      cell: () => <div className="value-skeleton-md bg-dark-400 animate-pulse" />,
    },
    {
      header: '24 Volume',
      cellClassName: 'volume-cell',
      cell: () => <div className="value-skeleton-md bg-dark-400 animate-pulse" />,
    },
  ];

  const dummyData = Array(10).fill({});

  return (
    <div id="categories-fallback">
      <h4>Top Categories</h4>

      <DataTable
        columns={columns}
        data={dummyData}
        rowKey={(_, index) => index}
        tableClassName="mt-3"
        headerRowClassName="bg-dark-500!"
      />
    </div>
  );
};
