<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Questão 4</title>
</head>
<body>
    <?php
        function randomize(int $min = 0, int $max = 100): void {
            echo random_int($min, $max);
        }
    ?>

    <h1>Valor aleatório:</h1>
    <p><?php randomize(1, 100); ?></p>
</body>
</html>