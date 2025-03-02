<?php
// 递归获取目录中的所有HTML文件
function getHtmlFiles($dir, $baseDir = '') {
    $files = [];
    $items = scandir($dir);
    
    foreach ($items as $item) {
        // 跳过当前目录、父目录和隐藏文件
        if ($item === '.' || $item === '..' || $item[0] === '.') {
            continue;
        }
        
        $path = $dir . '/' . $item;
        $relativePath = $baseDir ? $baseDir . '/' . $item : $item;
        
        if (is_dir($path)) {
            // 递归处理子目录
            $subFiles = getHtmlFiles($path, $relativePath);
            $files = array_merge($files, $subFiles);
        } else if (pathinfo($path, PATHINFO_EXTENSION) === 'html') {
            // 只添加HTML文件
            // 排除当前的预览画廊页面
            if ($item !== 'index.html') {
                // 从文件中提取标题
                $title = extractTitleFromHtml($path);
                
                $files[] = [
                    'path' => $relativePath,
                    'name' => $title ?: pathinfo($item, PATHINFO_FILENAME),
                    'fullPath' => $path
                ];
            }
        }
    }
    
    return $files;
}

// 从HTML文件中提取标题
function extractTitleFromHtml($filePath) {
    $content = file_get_contents($filePath);
    if (preg_match('/<title>(.*?)<\/title>/i', $content, $matches)) {
        return trim($matches[1]);
    }
    return '';
}

// 生成缩略图或获取预览图像
function getPreviewImage($htmlPath) {
    // 这里可以实现缩略图生成逻辑
    // 简单起见，我们返回一个占位图像
    return 'https://via.placeholder.com/300x200';
}

// 获取当前目录下的所有HTML文件
$htmlFiles = getHtmlFiles(__DIR__);

// 输出HTML页面而不是JSON
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Design Preview Gallery</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        /* 移除悬停效果 */
        .iframe-container {
            overflow: hidden;
            position: relative;
        }
        .iframe-container iframe {
            transform: scale(0.25); /* 缩小到25%大小 */
            transform-origin: 0 0;
            width: 400%; /* 宽度设为原来的4倍，因为缩小到25% */
            height: 400%; /* 高度设为原来的4倍，因为缩小到25% */
            border: none;
        }
        /* 添加透明浮层，防止iframe捕获点击事件 */
        .iframe-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 10;
            background-color: transparent;
            cursor: pointer;
        }
        /* 添加卡片点击效果 */
        .card-link {
            display: block;
            text-decoration: none;
            color: inherit;
        }
        .card-link:hover .card {
            border-color: #4F46E5;
        }
        .card {
            transition: border-color 0.2s ease;
            border: 2px solid transparent;
        }
    </style>
</head>
<body class="bg-gray-100 min-h-screen">
    <div class="container mx-auto px-4 py-8">
        <h1 class="text-3xl font-bold text-center mb-8 text-gray-800">Design Preview Gallery</h1>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <?php foreach ($htmlFiles as $file): ?>
                <a href="<?php echo htmlspecialchars($file['path']); ?>" class="card-link">
                    <div class="bg-white rounded-lg overflow-hidden shadow-md card">
                        <div class="h-48 bg-gray-200 relative iframe-container">
                            <iframe src="<?php echo htmlspecialchars($file['path']); ?>" scrolling="no"></iframe>
                            <div class="iframe-overlay"></div>
                        </div>
                        <div class="p-4">
                            <h3 class="text-lg font-semibold text-gray-800 truncate"><?php echo htmlspecialchars($file['name']); ?></h3>
                            <p class="text-sm text-gray-600 mt-1 truncate"><?php echo htmlspecialchars($file['path']); ?></p>
                        </div>
                    </div>
                </a>
            <?php endforeach; ?>
        </div>
        
        <?php if (empty($htmlFiles)): ?>
            <div class="text-center py-12">
                <p class="text-xl text-gray-600">No HTML files found</p>
            </div>
        <?php endif; ?>
    </div>

    <footer class="mt-12 py-6 text-center text-gray-600 text-sm">
        <p>Design Preview Gallery &copy; <?php echo date('Y'); ?></p>
    </footer>
</body>
</html>
